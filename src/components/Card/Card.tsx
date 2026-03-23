import styled from 'styled-components';
import { CardProps } from './Card.types';

const CardContainer = styled.div<{ 
  disabled?: boolean;
  backgroundColor?: string;
  borderRadius?: string;
}>`
  background-color: ${props => props.backgroundColor || '#ffffff'};
  border-radius: ${props => props.borderRadius || '8px'};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  opacity: ${props => (props.disabled ? 0.6 : 1)};
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.3s ease;
  max-width: 400px;

  &:hover:not([disabled]) {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    max-width: 100%;
    border-radius: ${props => {
      const radius = props.borderRadius || '8px';
      const numRadius = parseFloat(radius);
      return (numRadius * 0.8) + 'px';
    }};
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;

  @media (max-width: 768px) {
    height: 150px;
  }
`;

const CardContent = styled.div`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const CardTitle = styled.h3`
  margin: 0 0 12px 0;
  font-size: 1.25rem;
  color: #333333;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 10px;
  }
`;

const CardText = styled.p`
  margin: 0;
  font-size: 1rem;
  color: #666666;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const Card: React.FC<CardProps> = ({ 
  title, 
  content,
  disabled = false,
  imageUrl,
  backgroundColor,
  borderRadius = '8px',
  onClick
}) => (
  <CardContainer 
    disabled={disabled}
    backgroundColor={backgroundColor}
    borderRadius={borderRadius}
    onClick={!disabled ? onClick : undefined}
    data-testid="card"
  >
    {imageUrl && <CardImage src={imageUrl} alt={title} />}
    <CardContent>
      <CardTitle data-testid="card-title">{title}</CardTitle>
      <CardText data-testid="card-content">{content}</CardText>
    </CardContent>
  </CardContainer>
);