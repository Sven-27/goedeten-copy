import React from "react";
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import { useStore } from "contexts/customer/store";
import { useRouter } from 'next/router';

const HomeButton = () => {
	const { zipcodeStore } = useStore();
  const router = useRouter();

  const handleRedirect = () => {
    if (typeof window !== "undefined" && zipcodeStore.zipCode !== "") {
      router.push('/home');
    } else {
      router.push('/');
    }
  };

	return (
    <div>
      <Stack direction="row" alignItems="start" spacing={1} style={{ position: 'absolute', top: '10px', left: '10px', border: 'none' }}>
        <IconButton aria-label="home" size="small" onClick={handleRedirect}>
          <HomeIcon fontSize="small" />
        </IconButton>
      </Stack>
    </div>
	);
};

export default HomeButton;