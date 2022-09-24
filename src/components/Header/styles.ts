import styled  from 'styled-components';

export const Container = styled.div`
    height: 60px;
    background: ${props => props.theme.colors.primary};
    padding: 0 30px;
    display: flex;
    align-items: center;
    color: #fff;
    justify-content: right;
    padding: 0 5px
`;