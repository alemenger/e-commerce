import styled from "styled-components";

export const AdminContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem;
`;

export const AdminTitle = styled.h2`
  margin-bottom: 2rem;
  text-align: center;
`;

export const ProductCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1rem;
  background: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
`;

export const PrimaryButton = styled.button`
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  background: #0d6efd;
  color: white;
  font-weight: 600;

  &:hover {
    background: #0b5ed7;
  }
`;