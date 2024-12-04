
import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { ListTodos } from '../apis/fetchapi';
import CalendarView from './CalendarView';

function Home() {
  const [students, setStudents] = useState([]);
  const [filter, setFilter] = useState("All");

  const header = {
    "Authorization": `Token ${sessionStorage.getItem("token")}`,
    "content-type": "application/json",
  };

  useEffect(() => {
    ListTodos(header)
      .then((res) => {
        console.log(res.data);
        setStudents(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  const filteredTodos = students.filter((todo) => {
    if (filter==="All") return true;
    return todo.status === filter;
  });

  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col md={3} sm={12}>
            <Link to="/add" className="btn btn-success mt-3">Add Todo</Link>
            
           <CalendarView todos={students} />          
            <div className="mt-3">
              <button className={`btn ${filter==="All"?"btn-primary":"btn-outline-primary"} m-1`} onClick={() => setFilter("All")}>
                All
              </button>
            <button className={`btn ${filter==="Pending"?"btn-primary":"btn-outline-primary"} m-1`} onClick={() => setFilter("Pending")}>
                Pending
              </button>
            <button className={`btn ${filter==="In Progress"?"btn-primary":"btn-outline-primary"} m-1`} onClick={()=>setFilter("In Progress")}>
                In Progress
              </button>
              <button className={`btn ${filter==="Completed"?"btn-primary":"btn-outline-primary"} m-1`} onClick={()=>setFilter("Completed")}>
                Completed
              </button>
            </div>
          </Col>
          <Col>
            <table className="mt-3 table table-bordered table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>TITLE</th>
                  <th>CONTENT</th>
                  <th>DUE_DATE</th>
                  <th>STATUS</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {filteredTodos.length !== 0 ? (
                  filteredTodos.map((stud) => (
                    <tr key={stud.id}>
                      <td>{stud.id}</td>
                      <td>{stud.title}</td>
                      <td>{stud.content}</td>
                      <td>{stud.due_date}</td>
                      <td>{stud.status}</td>
                      <td>
                        <Link to={`/detail/${stud.id}`} className="btn btn-success">View</Link>
                        <Link to={`/edit/${stud.id}`} className="btn btn-success">Edit</Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center">No Data</td>
                  </tr>
                )}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
