"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';

export default function UsersList({ users: initialUsers, error }) {
  const [users, setUsers] = useState(initialUsers);
  const [filters, setFilters] = useState({
    name: '',
    email: '',
    birthYear: '',
    country: '',
  });
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: 'asc',
  });
  const [deleteError, setDeleteError] = useState(null);

  const deleteUser = async (userId) => {
    if (!confirm('Ste si istý, že chcete odstrániť tohto používateľa?')) {
      return;
    }

    try {
      const response = await fetch(`/api/users?id=${userId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Nepodarilo sa odstrániť používateľa.');
      }

      setUsers(users.filter(user => user.id !== userId));
      setDeleteError(null);
    } catch (error) {
      console.error('Chyba pri odstraňovaní používateľa:', error);
      setDeleteError(error.message);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    } else if (sortConfig.key === key && sortConfig.direction === 'desc') {
      direction = null;
      key = null;
    }
    setSortConfig({ key, direction });
  };

  const filteredUsers = users.filter(user => {
    const nameMatch = user.name.toLowerCase().includes(filters.name.toLowerCase());
    const emailMatch = user.email.toLowerCase().includes(filters.email.toLowerCase());
    const birthYearMatch = filters.birthYear ? new Date(user.birthYear).getFullYear().toString() === filters.birthYear : true;
    const countryMatch = user.country.toLowerCase().includes(filters.country.toLowerCase());
    return nameMatch && emailMatch && birthYearMatch && countryMatch;
  });

  const sortedUsers = [...filteredUsers];

  if (sortConfig.key) {
    sortedUsers.sort((a, b) => {
      let aValue = a[sortConfig.key];
      let bValue = b[sortConfig.key];

      if (sortConfig.key === 'birthYear') {
        aValue = new Date(aValue).getTime();
        bValue = new Date(bValue).getTime();
      } else {
        aValue = aValue.toString().toLowerCase();
        bValue = bValue.toString().toLowerCase();
      }

      if (aValue < bValue) {
        return sortConfig.direction === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortConfig.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
  }

  if (error || deleteError) {
    return (
      <div className="users-page">
        <div className="users-container">
          <div className="alert alert-danger text-center">
            <h2>Chyba</h2>
            <p>{error || deleteError}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!users || users.length === 0) {
    return (
      <div className="users-page">
        <div className="users-container">
          <div className="alert alert-info text-center">
            <h2>Používatelia nenájdení</h2>
            <p>V systéme zatiaľ nie sú zaregistrovaní používatelia.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="users-page">
      <div className="users-container">
        <div className="users-card p-4 mb-4">
          <h2 className="text-center mb-4">Registrovaní používatelia</h2>

          {/* Filtrovanie a triedenie */}
          <div className="row mb-4">
            <div className="col-md-3 mb-2">
              <div onClick={() => handleSort('name')} style={{ cursor: 'pointer' }}>
                <strong>Meno</strong>
                {sortConfig.key === 'name' && (sortConfig.direction === 'asc' ? ' ↑' : ' ↓')}
              </div>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Filter podľa mena"
                value={filters.name}
                onChange={handleFilterChange}
              />
            </div>
            <div className="col-md-3 mb-2">
              <div onClick={() => handleSort('email')} style={{ cursor: 'pointer' }}>
                <strong>Email</strong>
                {sortConfig.key === 'email' && (sortConfig.direction === 'asc' ? ' ↑' : ' ↓')}
              </div>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Filter podľa e-mailu"
                value={filters.email}
                onChange={handleFilterChange}
              />
            </div>
            <div className="col-md-3 mb-2">
              <div onClick={() => handleSort('birthYear')} style={{ cursor: 'pointer' }}>
                <strong>Rok narodenia</strong>
                {sortConfig.key === 'birthYear' && (sortConfig.direction === 'asc' ? ' ↑' : ' ↓')}
              </div>
              <input
                type="text"
                name="birthYear"
                className="form-control"
                placeholder="Filter podľa roku narodenia"
                value={filters.birthYear}
                onChange={handleFilterChange}
              />
            </div>
            <div className="col-md-3 mb-2">
              <div onClick={() => handleSort('country')} style={{ cursor: 'pointer' }}>
                <strong>Krajina</strong>
                {sortConfig.key === 'country' && (sortConfig.direction === 'asc' ? ' ↑' : ' ↓')}
              </div>
              <input
                type="text"
                name="country"
                className="form-control"
                placeholder="Filter podľa krajiny"
                value={filters.country}
                onChange={handleFilterChange}
              />
            </div>
          </div>

          <div className="row g-4">
            {sortedUsers.map((user) => (
              <div key={user.id} className="col-12 col-md-6 col-lg-4">
                <div className="card user-card h-100">
                  <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{user.country}</h6>
                    <div className="card-text">
                      <p className="mb-1">
                        <strong>Email:</strong> {user.email}
                      </p>
                      <p className="mb-0">
                        <strong>Dátum narodenia:</strong>{' '}
                        {new Date(user.birthYear).toLocaleDateString('sk-SK', {
                          year: 'numeric',
                          month: '2-digit',
                          day: '2-digit',
                        })}
                      </p>
                    </div>
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="btn btn-danger mt-3 w-100"
                    >
                      Odstrániť používateľa
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {sortedUsers.length === 0 && (
            <p className="text-center mt-4">Používatelia nenájdení.</p>
          )}
        </div>
      </div>
    </div>
  );
}