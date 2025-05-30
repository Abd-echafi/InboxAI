import AuthBody from '@/components/auth/auth-body';
import { Button } from '@/components/ui/button';
import { useDragAnimation } from '@/hooks/animation/use-drag-animation';
import { createContext, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

// eslint-disable-next-line react-refresh/only-export-components
export const ForgetPasswordProvider = createContext();

function ForgetPassword() {
  const location = useLocation();
  const { ref, prev } = useDragAnimation(<Outlet />, location.key);
  const [postData, setPostData] = useState({
    email: 'djalil.meskali@gmail.com',
    otp: '',
    password: 'djalilmsk',
    confirmPassword: 'djalilmsk',
  });

  return (
    <ForgetPasswordProvider.Provider value={{ postData, setPostData }}>
      <AuthBody className="mt-10">
        <div className="md:p-8">
          <div className="flex flex-col gap-6">
            {/* title */}
            <div className="flex flex-col items-center text-center">
              <h1 className="text-2xl font-bold">Welcome back</h1>
              <p className="text-muted-foreground text-balance">
                Forget Password
              </p>
            </div>

            <div className="space-y-6" ref={ref}>
              {prev}
            </div>

            <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
              <span className="bg-card text-muted-foreground relative z-10 px-2">
                Or continue with
              </span>
            </div>

            <Link to="http://localhost:3000/api/v1/auth/google">
              <Button variant="outline" type="button" className="w-full">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                    fill="currentColor"
                  />
                </svg>
                <span className="sr-only">Login with Google</span>
              </Button>
            </Link>

            <div className="text-center text-sm">
              don`t have an account?{' '}
              <Link to="/auth/sign-up" className="underline underline-offset-4">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </AuthBody>
    </ForgetPasswordProvider.Provider>
  );
}

export default ForgetPassword;
