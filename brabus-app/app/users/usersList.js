"use client"
import "bootstrap/dist/css/bootstrap.min.css";

export default function UsersList({ users, error }) {
  if (error) {
    return (
      <div
        style={{
          backgroundImage: "url('BLK.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <div
          className="col-12 col-md-8 col-lg-6 p-4"
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 className="text-center mb-4 text-danger">Error</h2>
          <p className="text-center">{error}</p>
        </div>
      </div>
    );
  }

  if (!users || users.length === 0) {
    return (
      <div
        style={{
          backgroundImage: "url('BLK.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <div
          className="col-12 col-md-8 col-lg-6 p-4"
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 className="text-center mb-4">No Users Found</h2>
          <p className="text-center">There are currently no registered users in the system.</p>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        backgroundImage: "url('BLK.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "2rem 1rem",
      }}
    >
      <div className="container">
        <div
          className="p-4 mb-4"
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2 className="text-center mb-4">Registered Users</h2>
          
          <div className="row g-4">
            {users.map((user) => (
              <div key={user.id} className="col-12 col-md-6 col-lg-4">
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{user.country}</h6>
                    <div className="card-text">
                      <p className="mb-1">
                        <strong>Email:</strong> {user.email}
                      </p>
                      <p className="mb-0">
                        <strong>Birth Date:</strong>{' '}
                        {new Date(user.birthYear).toLocaleDateString('ru-RU', {
                          year: 'numeric',
                          month: '2-digit',
                          day: '2-digit'
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}