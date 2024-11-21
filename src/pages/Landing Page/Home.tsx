import { useEffect, useState } from 'react';
import HomeLandingPage from '../../components/LandingPageComponent/HomeLandingPage';
import HomeFacilities from '../../components/LandingPageComponent/HomeFacilities';
import HomeCourses from '../../components/LandingPageComponent/HomeCourses';
import HomeFeatures from '../../components/LandingPageComponent/HomeFeatures';
import ReviewSection from '../../components/LandingPageComponent/ReviewSection';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// Define types for landing page data
interface LandingPageData {
  features: string[]; // Adjust based on actual structure
  // Add other fields that your API response contains
}

function Home() {
  const [landingData, setLandingData] = useState<LandingPageData | null>(null);

  useEffect(() => {
    const fetchLandingPageData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/admin/getLandingPage', {
          method: 'GET',
        });
        const data: LandingPageData = await response.json(); // Ensure the correct type
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
          <HomeFeatures  />
          <ReviewSection />
        </>
      )}
      <Footer />
    </div>
  );
}

export default Home;
