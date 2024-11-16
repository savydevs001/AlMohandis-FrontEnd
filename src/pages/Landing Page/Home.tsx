import  { useEffect, useState } from 'react';
import HomeLandingPage from '../../components/LandingPage Component/HomeLandingPage';
import HomeFacilities from '../../components/LandingPage Component/HomeFacilities';
import HomeCourses from '../../components/LandingPage Component/HomeCourses';
import HomeFeatures from '../../components/LandingPage Component/HomeFeatures';
import ReviewSection from '../../components/LandingPage Component/ReviewSection';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function Home() {
  const [landingData, setLandingData] = useState(null);

  useEffect(() => {
    const fetchLandingPageData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/admin/getLandingPage', {
          method: 'GET',
        });
        const data = await response.json();
        setLandingData(data);
      } catch (error) {
        console.error("Error fetching landing page data:", error);
      }
    };

    fetchLandingPageData();
  }, []);

  return (
    <div>
      <Navbar />
      {landingData && (
        <>
          <HomeLandingPage data={landingData} />
          <HomeFacilities data={landingData} />
          <HomeCourses />
          <HomeFeatures />
          <ReviewSection />
        </>
      )}
      <Footer />
    </div>
  );
}

export default Home;