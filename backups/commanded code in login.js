// const isAuthenticated = useLoaderData();
// const mutation = useMutation((user) => authenticate(user));
// if (isAuthenticated) {
//   return redirect("/dashboard");
// }

// const {
//   isLoading,
//   isError,
//   data: authenticated,
//   error,
// } = useQuery("authenticated", authenticate);

// if (mutation.isSuccess) {
//   return redirect("/dashboard");
// }

// const loginHandler = async (e) => {
//   /*
//   objectives: submit form, check if authenticated, redirect to dashboard
//   steps:
//   1. create state and handler for form submitting
//   2. if not authenticated,
//     show a modal with error credentials error
//   3. else
//     save the user state
//     save the login token in localstorage
//     redirect to dashboard
//   */
//   e.preventDefault();
//   let credentials = {};
//   credentials.Username = forms[0].value;
//   credentials.Password = forms[1].value;
//   // setUser(credentials);
//   // mutation.mutate(credentials);
// };
