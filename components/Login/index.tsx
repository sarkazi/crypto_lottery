import { useContract, useMetamask } from "@thirdweb-dev/react";
import Layout from "../Layout";
import styles from "./login.module.scss";
import { PropagateLoader } from "react-spinners";
const Login = () => {
  const connectMyMetamask = useMetamask();
  const { isLoading } = useContract(
    process.env.NEXT_PUBLIC_LOTTERY_CONTRACT_ADDRESS
  );

  return (
    <div className={styles.main}>
      <Layout className="">
        <div className={styles.content}>
          <img src="./logo.png" alt="" />
          <h1>the nikogortio</h1>
          <h2>Get starting by loggining with your MetaMask</h2>

          {isLoading ? (
            <PropagateLoader color="#ffffff" size={20} />
          ) : (
            <button onClick={connectMyMetamask} className={styles.loginBtn}>
              Login with MetaMask
            </button>
          )}
        </div>
      </Layout>
    </div>
  );
};

export default Login;
