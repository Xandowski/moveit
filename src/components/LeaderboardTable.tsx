import styled from 'styled-components'
import Profile from './Profile'

const Table = styled.table`
  th {
    font-size: 1rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
    text-align: left;
    text-transform: uppercase;
  }

  tr:not(:first-child) {
    background: ${({ theme }) => theme.colors.white};
    margin-bottom: 0.5rem;
    height: 6rem;

    td:first-child {
      font-size: 1.5rem;
    }
  }

  tr {
    > td:first-child,
    th:first-child {
      width: 4.5rem;
      text-align: center;
    }
    td:first-child {
      font-weight: 600;
    }
    > td:nth-child(2),
    th:nth-child(2) {
      display: grid;
      grid-template-columns: 3fr 1fr 1fr;
      width: 55.25rem;
      height: 4rem;
      padding: 1rem 1.5rem;
      align-items: center;

      > div {
        > img {
          width: 4.1rem;
          height: 4.1rem;
        }

        div {
          strong {
            font-size: 1.25;
          }
        }
      }
    }
    td {
      span {
        font-weight: 500;
        color: ${({ theme }) => theme.colors.blue};
        span {
          color: ${({ theme }) => theme.colors.text};
        }
      }
    }
  }
`

const Div = styled.div`
  header {
    color: ${({ theme }) => theme.colors.title};
    font-weight: 600;
    font-size: 2.25rem;
    margin-bottom: 2.5rem;
  }
`

const LeaderboardTable = () => {
  return (
    <Div>
      <header>
        <h2>Leaderboard</h2>
      </header>
      <Table>
        <tr>
          <th>Posição</th>
          <th colspan="3">
            <span>Usuários</span>
            <span>Desafios</span>
            <span>Expêriencia</span>
          </th>
        </tr>
        <tr>
          <td>1</td>
          <td colspan="3">
            <Profile />
            <span>
              50 <span>completados</span>
            </span>
            <span>
              500 <span>xp</span>
            </span>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td colspan="3">
            <Profile />
            <span>
              50 <span>completados</span>
            </span>
            <span>
              500 <span>xp</span>
            </span>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td colspan="3">
            <Profile />
            <span>
              50 <span>completados</span>
            </span>
            <span>
              500 <span>xp</span>
            </span>
          </td>
        </tr>
      </Table>
    </Div>
  )
}

export default LeaderboardTable
