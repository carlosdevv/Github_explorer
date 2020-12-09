/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';
import api from '../../services/api'

import logo from '../../assets/logo.svg';
import { UpBar, ProfileRepo, StatusRepo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  }
}

const Repository: React.FC = () => {
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get(`/repos/${params.repository}`).then(response => {
      setRepository(response.data);
    })
    api.get(`/repos/${params.repository}/issues`).then(response => {
      setIssues(response.data);
    })
  }, [params.repository]);

  return (
    <>
      <UpBar>
        <img src={logo} alt="GitHub Logo" />

        <div>
          <Link to="/">
            <a href="test">
              <FiChevronLeft size={12} />
              <span>Voltar</span>
            </a>
          </Link>
        </div>
      </UpBar>

      { repository && (
        <ProfileRepo>
          <img
            src={repository.owner.avatar_url}
            alt={repository.owner.login}
          />

          <div>
            <strong>{repository.full_name}</strong>
            <p>{repository.description}</p>
          </div>
        </ProfileRepo>
      )}

      { repository && (
        <StatusRepo>
          <div>
            <strong>{repository.stargazers_count}</strong>
            <p>Stars</p>
          </div>

          <div>
            <strong>{repository.forks_count}</strong>
            <p>Forks</p>
          </div>

          <div>
            <strong>{repository.open_issues_count}</strong>
            <p>Issues abertas</p>
          </div>
        </StatusRepo>
      )}

      <Issues>
        {issues.map(issue => (
          <a key={issue.id} href={issue.html_url}>
            <div>
              <strong>{issue.title}</strong>
              <p>{issue.user.login}</p>
            </div>

            <FiChevronRight size={20} />
          </a>

        ))}
      </Issues>
    </>
  )
};

export default Repository;
