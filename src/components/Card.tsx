/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

const style = css`
  background-color: #eeeeee;
  border-radius: 4px;
  padding: 8px;
`;

export const Card: React.FC = ({ children }) => <div css={style}>{children}</div>;
