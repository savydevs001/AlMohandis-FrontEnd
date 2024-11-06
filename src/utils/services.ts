import axios from "axios";
export async function getVdoCipherOtp(url: string) {
    try {
      const apiSecret = import.meta.env.VITE_VDOCIPHER_API_SECRET;
      const response = await axios.post(
        `${url}/otp`,
        { ttl: 300 },
        {
          headers: {
            Authorization: `Apisecret ${apiSecret}`,
            'Content-Type': 'application/json',
          },
        }
      );
  
      const { otp, playbackInfo } = response.data;
      return { otp, playbackInfo };
    } catch (error) {
      console.error('Error fetching OTP and playback info:', error);
      throw new Error('Failed to fetch VdoCipher OTP and playback information');
    }
  }
  