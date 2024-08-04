import { FaLinkedin, FaWhatsapp,FaGithub, FaTwitter, FaInstagram, FaPhone} from 'react-icons/fa';

const socialMedia = [
  { id: 1, name: 'LinkedIn', url: 'https://www.linkedin.com/in/alex-karobia-510a17264', icon: <FaWhatsapp color="#057c2deb" /> },
  { id: 2, name: 'GitHub', url: 'https://github.com/karoshalex0873', icon: <FaGithub color="#333" /> },
  { id: 3, name: 'Twitter', url: 'https://x.com/kalecalex0873', icon: <FaTwitter color="#1DA1F2" /> },
  { id: 4, name: 'Instagram', url: 'https://www.instagram.com/', icon: <FaInstagram color="#E1306C" /> },
  // { id: 5, name: 'Facebook', url: 'https://www.facebook.com/', icon: <FaFacebook color="#1877F2" /> },
];

const SocialMediaLinks = () => {
  return (
    <div className="py-10 bg-gray-300 ">
      <div className="container mx-auto text-center overflow-hidden">
        <h2 className="text-xl font-bold  text-primary italic font-serif mb-8">Kindly contact us for more info</h2>
    
        <div className="flex items-center justify-center space-x-1 lg:space-x-8 px-6">
          {socialMedia.map((media) => (
            <a
              key={media.id}
              href={media.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition transform hover:scale-110"
            >
              <div className="flex items-center justify-center  w-12 h-12 text-4xl bg-white shadow-xl rounded-full p-2 hover:bg-white hover:text-black">
                {media.icon}
              </div>
            </a>
          ))}
        </div>
        <div className="flex justify-center items-center">
        <FaPhone className="text-4xl text-secondary" />
        <h1 className="text-xl font-bold font-serif  text-primary py-4 mt-9">+25470927352</h1>
        </div>

      </div>
    </div>
  );
};

export default SocialMediaLinks;
