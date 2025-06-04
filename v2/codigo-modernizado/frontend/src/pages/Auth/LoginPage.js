import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Container,
  Alert,
  CircularProgress
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { login } from '../../services/authService';
import { isAuthenticated } from '../../utils/auth';

// Validation schema
const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required')
});

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState('');
  
  // Redirect if already authenticated
  React.useEffect(() => {
    if (isAuthenticated()) {
      navigate('/');
    }
  }, [navigate]);

  // Get redirect path from location state or use default
  const from = location.state?.from || '/';

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await login(values);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message || 'Login failed. Please check your credentials.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper
        elevation={3}
        sx={{
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 8
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
          CardDemo Login
        </Typography>

        {error && (
          <Alert severity="error" sx={{ width: '100%', mb: 2 }}>
            {error}
          </Alert>
        )}

        <Formik
          initialValues={{ username: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form style={{ width: '100%' }}>
              <Box sx={{ mb: 2 }}>
                <Field
                  as={TextField}
                  name="username"
                  label="Username"
                  fullWidth
                  error={touched.username && Boolean(errors.username)}
                  helperText={touched.username && errors.username}
                />
              </Box>
              <Box sx={{ mb: 3 }}>
                <Field
                  as={TextField}
                  name="password"
                  label="Password"
                  type="password"
                  fullWidth
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
              </Box>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={isSubmitting}
                sx={{ py: 1.5 }}
              >
                {isSubmitting ? <CircularProgress size={24} /> : 'Sign In'}
              </Button>
            </Form>
          )}
        </Formik>
        
        <Box mt={2}>
          <Typography variant="body2" color="textSecondary" align="center">
            Demo Credentials:
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center">
            Admin: admin / admin123
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center">
            User: user / user123
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default LoginPage;