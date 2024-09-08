import styled from 'styled-components';

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f7f9fc;
  height: 100vh;
`;

export const Header = styled.div`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const TasksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const TaskCard = styled.div`
  background: ${(props) => (props.priority === 'high' ? '#ff6961' : props.priority === 'medium' ? '#fdfd96' : '#77dd77')};
  padding: 15px;
  border-radius: 8px;
  width: 200px;
`;

export const AddTaskButton = styled.button`
  position: fixed;
  right: 20px;
  bottom: 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 2rem;
  cursor: pointer;
`;