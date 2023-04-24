import styled, { css } from 'styled-components';

export const Container = styled.a`
	${({ theme }) => css`
    position: fixed;
    z-index: 6;
    background: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    bottom: 2rem;
    right: 2rem;
    opacity: 0.7;
`}
`;
