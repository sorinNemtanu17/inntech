import { useEffect, useState } from 'react';

export const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <section className="py-60 px-20 grid gap-5 justify-items-center md:grid-cols-4 sm:grid-cols-2 grid-cols-1">
      {users.map((user) => {
        const { id, name, email } = user;
        return (
          <article
            key={id}
            className="p-5 border-sky-500 flex flex-col items-center gap-2 drop-shadow-lg shadow-lg w-full"
          >
            <h3 className="uppercase font-medium text-sm">{name}</h3>
            <p className="text-slate-400 text-xs">{email}</p>
          </article>
        );
      })}
    </section>
  );
};
