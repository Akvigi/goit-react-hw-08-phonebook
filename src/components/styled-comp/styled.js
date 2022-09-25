import styled from 'styled-components';

export const PageContainer = styled.div`
  padding: 2% 3% 0 3%;
  display: flex;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  padding: 2%;
  /* border: 1px black solid; */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 50%;
  /* background-color: black; */
  justify-content: space-between;
`;

export const SectionDiv = styled.section`
  /* border: 1px black solid;
  padding: 10px; */
`;

export const BtnCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 165px;
`;

export const Notification = styled.p`
  font-size: 15px;
  font-weight: 500px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px black solid;
  max-width: 200px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
