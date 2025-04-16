'use client';

import { useEffect, useState } from "react";
import { Github } from "lucide-react";

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
};

const GithubProjects = () => {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/slymanmrcan/repos")
      .then(res => res.json())
      .then(data => setRepos(data));
  }, []);

  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
        <Github size={28} />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-1 duration-300 border border-zinc-200 dark:border-zinc-800"
          >
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
              {repo.name}
            </h3>
            <p className="text-zinc-700 dark:text-zinc-300 text-sm">
              {repo.description || "Açıklama yok."}
            </p>
            <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              {repo.language ? `Kod dili: ${repo.language}` : ""}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default GithubProjects;
