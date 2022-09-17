import React from 'react';
import {
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  styled,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardIcon from '@mui/icons-material/Keyboard';

type MainSearchProps = {
  value: string;
  setValue: (arg: string) => void;
};

const StyledStack = styled(Stack)(() => ({
  width: '30%',
  flexDirection: 'row',
}));

const StyledTOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
  background: '#000',
  border: `1px solid ${theme.palette.grey[800]}`,
  color: theme.palette.grey[200],
  outline: 'none',
  borderTopRightRadius: '0',
  borderBottomRightRadius: '0',
  '& svg': {
    color: theme.palette.grey[800],
  },
  '& fieldset': {
    border: 'none !important',
  },
}));

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  height: '42px',
  width: '50px',
  background: theme.palette.grey[800],
  borderTopLeftRadius: '0',
  borderTopRightRadius: '5px',
  borderBottomRightRadius: '5px',
  borderBottomLeftRadius: '0',
  '& svg': {
    color: '#fff',
  },
}));

export function MainSearch({ value, setValue }: MainSearchProps) {
  return (
    <StyledStack>
      <StyledTOutlinedInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        size="small"
        fullWidth
        placeholder="Search"
        endAdornment={
          <InputAdornment position="end">
            <KeyboardIcon />
          </InputAdornment>
        }
      />
      <StyledIconButton>
        <SearchIcon />
      </StyledIconButton>
    </StyledStack>
  );
}
