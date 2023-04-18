import Layout from "./components/Layout";
import profile from "./image/beer.jpg";
import './style/owner.css'

const Owner = () => {
  return (
    <Layout>
    <div>
      <h1>Teerapong - Group J - No.52</h1>
      <img src={profile}  />
      <h5>Short Biography :</h5>
      <p>Hi, My name is Teerapong Banmairuruy. Nickname Beer.</p>
    </div>
      
    </Layout>
  );
};

export default Owner;
