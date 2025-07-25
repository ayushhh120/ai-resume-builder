import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import UserLogout from './UserLogout';

const Home = () => {
  const navigate = useNavigate();

  const handleResumeClick = () => {
    navigate('/resume-builder');
  };

  const handleInterviewClick = () => {
    navigate('/mock-interview');
  };

  const handleLogout = () => {
   navigate('/logout');
  }

  return (
    <div className="min-h-screen w-full mx-auto gradient-hero flex items-center justify-center p-6">
      <div className="w-full h-auto max-w-4xl animate-fade-in">
        {/* Welcome Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl text-gray-300 md:text-5xl font-bold text-foreground animate-scale-in">
            👋 Welcome,
          </h1>
          <p className="text-lg text-gray-400 animate-fade-in delay-100">
            What would you like to do today?
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto card-glow">
          {/* Resume Builder Card */}
          <Card className="glassmorphic p-8 card-glow transition-smooth hover:scale-105 cursor-pointer group">
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-smooth">
                  📄
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Make your Resume with AI
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Let AI help you build a professional resume in seconds.
                </p>
              </div>
              
              <Button
                onClick={handleResumeClick}
                className="w-full gradient-button hover:scale-105 transition-smooth border-0 font-medium text-primary-foreground shadow-xl"
                size="lg"
              >
                Get Started
              </Button>
            </div>
          </Card>

          {/* Mock Interview Card */}
          <Card className="glassmorphic p-8 card-glow transition-smooth hover:scale-105 cursor-pointer group">
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-smooth">
                  🎤
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Mock Interview Practice
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Prepare for real interviews with smart voice-based feedback.
                </p>
              </div>
              
              <Button
                onClick={handleInterviewClick}
                className="w-full gradient-button hover:scale-105 mt-8 transition-smooth border-0 font-medium text-primary-foreground shadow-xl"
                size="lg"
              >
                Get Started
              </Button>
            </div>
          </Card>
          
        </div>
        <div>
              <Button
                onClick={handleLogout}
                className="logoutButton cursor-pointer gradient-button bg-gradient-to-r from-gray-700 to-gray-800 hover:scale-105 mt-10 ml-30  lg:ml-97 md:ml-80  transition-smooth border-0 font-medium text-gray-300 shadow-xl"
                size="lg"
              >
               Logout
              </Button>
          </div>
      </div>
    </div>
  );
};

export default Home;