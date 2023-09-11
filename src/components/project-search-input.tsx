import React, { useCallback } from 'react';
import { Stack } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { InputBase, ButtonBase } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import { theme } from '@/theme/theme';

export const StyledIconButton = styled(ButtonBase)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  padding: '4px',
  background: theme.palette.primary.main,
  color: theme.palette.common.white,
  transition: '0.3s',
  overflow: 'hidden',
  '&:hover': {
    background: alpha(theme.palette.primary.main, 0.7),
    color: theme.palette.primary.dark,
  },
}));

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '.5rem',
  border: `1px solid ${theme.palette.milky['600']}`,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
  overflow: 'hidden',
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.grey[500],
}));

export const ClearIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  right: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 20,
  cursor: 'pointer',
  color: theme.palette.grey[500],
  '&:hover': {
    color: theme.palette.grey[700],
  },
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    paddingRight: `calc(1em + ${theme.spacing(2)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    '&:-webkit-autofill': {
      transitionDelay: '9999s',
      transitionProperty: 'background-color, color',
    },
  },
}));

export default function ProjectSearchBox({
  value,
  inputSearch,
}: {
  value: any;
  inputSearch: (value: string) => void;
}) {
  return (
    <Stack direction="row">
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          value={value}
          onChange={inputSearch}
          placeholder="Search…"
        />
      </Search>
    </Stack>
  );
}
