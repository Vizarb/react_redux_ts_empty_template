import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTokens } from '../auth/authSlice';
import { refreshAccessToken } from '../auth/authAPI';
import { RootState } from '../../app/store';

const useTokenRefresh = () => {
    const dispatch = useDispatch();
    const refreshToken = useSelector((state: RootState) => state.auth.refreshToken);

    useEffect(() => {
        const interval = setInterval(async () => {
            if (refreshToken) {
                try {
                    const data = await refreshAccessToken(refreshToken);
                    dispatch(setTokens({ accessToken: data.access, refreshToken: data.refresh }));
                } catch (error) {
                    console.error('Token refresh failed:', error);
                }
            }
        }, 14 * 60 * 1000); // Refresh token every 14 minutes

        return () => clearInterval(interval);
    }, [dispatch, refreshToken]);
};

export default useTokenRefresh;
