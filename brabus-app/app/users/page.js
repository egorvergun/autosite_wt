import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import prisma from '@/lib/prisma';
import UsersList from './usersList';
import { authOptions } from '../api/auth/[...nextauth]/route';

async function getUsers() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        birthYear: true,
        country: true,
      },
    });
    return { users };
  } catch (error) {
    console.error('Error fetching users:', error);
    return { error: 'Failed to fetch users. Please try again later.' };
  }
}

export default async function UsersPage() {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect('/login');
  }

  const { users, error } = await getUsers();
  return <UsersList users={users} error={error} />;
}