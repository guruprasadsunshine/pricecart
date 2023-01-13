import Card from './Card';
import './App.css';

function App() {
const guru=[{
  plan:"Free",
  price:0,
  Users:"single User",
  UsersEnabler:true,
  storage:"5GB",
  storageEnabler:true,
  publicProject:"Unlimited Public Projects",
  publicProjectEnabler:true,
  communityAccess:"Community Access",
  communityAccessEnabler: true,
  privateProject:"Unlimited Phone Support",
  privateProjectEnabler:false ,
  phoneSupport:"Dedicated Phone Support",
  phoneSupportEnabler:false,
  subDomain:"Free SubDomain",
  subDomainEnabler:false,
  reports:"Monthly Status Report",
  reportsEnabler: false ,
},
{
  plan:"Plus",
  price:49,
  Users:"5 User",
  UsersEnabler:true,
  storage:"50GB",
  storageEnabler:true,
  publicProject:"Unlimited Public Projects",
  publicProjectEnabler:true,
  communityAccess:"Community Access",
  communityAccessEnabler: true,
  privateProject:"Unlimited Phone Support",
  privateProjectEnabler:true ,
  phoneSupport:"Dedicated Phone Support",
  phoneSupportEnabler:true,
  subDomain:"Free SubDomain",
  subDomainEnabler:true,
  reports:"Monthly Status Report",
  reportsEnabler: false ,
},
{
  plan:"Pro",
  price:150,
  Users:"Unlimited user",
  UsersEnabler:true,
  storage:"150GB",
  storageEnabler:true,
  publicProject:"Unlimited Public Projects",
  publicProjectEnabler:true,
  communityAccess:"Community Access",
  communityAccessEnabler: true,
  privateProject:"Unlimited Phone Support",
  privateProjectEnabler:true ,
  phoneSupport:"Dedicated Phone Support",
  phoneSupportEnabler:true,
  subDomain:"Free SubDomain",
  subDomainEnabler:true,
  reports:"Monthly Status Report",
  reportsEnabler: true,
}]

  return (
    <div className="App">
      <section className="pricing py-5">
  <div className="container">
    <div className="row">
    
   {
    guru.map((g,i)=>{
      return <Card data={g} key={i} />
    })
   }
    </div>
  </div>
</section>
    </div>
  );
}

export default App;
