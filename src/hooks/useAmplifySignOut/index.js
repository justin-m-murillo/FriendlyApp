import { Auth, DataStore } from 'aws-amplify';

const useAmplifySignOut = () => {
  const signOut = () => {
    //DataStore.clear();
    Auth.signOut();
  }
  return signOut;
}

export default useAmplifySignOut;