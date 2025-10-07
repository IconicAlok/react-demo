import Hero from '../component/Hero';
import Homecards from '../component/HomeCards';
import JobListings from '../component/JobsListings';
import ViewAllJobs from '../component/ViewAllJobs';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Homecards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default HomePage;
