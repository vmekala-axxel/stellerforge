import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { api } from '@/lib/api';

interface HFZASmartAssistProps {
  onComplete?: (data: {
    industry: string;
    company_type: string;
    country: string;
  }) => void;
}

const industries = [
  'Oil & Gas',
  'Industrial Manufacturing',
  'Logistics',
  'eCommerce',
  'Maritime',
  'FMCG',
  'StartUps'
];

const companyTypes = [
  {
    value: 'FZE',
    label: 'Individual Owned',
    description: '(Free Zone Establishment)'
  },
  {
    value: 'FZC',
    label: 'Multiple-Shareholder Owned',
    description: '(Free Zone Company)'
  },
  {
    value: 'Branch of a company',
    label: 'Branch',
    description: '(of any company)'
  }
];

const countries = [
  'United Arab Emirates',
  'Saudi Arabia',
  'Kuwait',
  'Qatar',
  'Bahrain',
  'Oman',
  'Jordan',
  'Lebanon',
  'Egypt',
  'Morocco',
  'Tunisia',
  'Algeria',
  'Libya',
  'Sudan',
  'Syria',
  'Iraq',
  'Yemen',
  'Palestine',
  'United States',
  'United Kingdom',
  'Germany',
  'France',
  'Italy',
  'Spain',
  'Netherlands',
  'Belgium',
  'Switzerland',
  'Austria',
  'Sweden',
  'Norway',
  'Denmark',
  'Finland',
  'Poland',
  'Czech Republic',
  'Hungary',
  'Romania',
  'Bulgaria',
  'Greece',
  'Portugal',
  'Ireland',
  'Canada',
  'Australia',
  'New Zealand',
  'Japan',
  'South Korea',
  'China',
  'India',
  'Singapore',
  'Malaysia',
  'Thailand',
  'Vietnam',
  'Philippines',
  'Indonesia',
  'Brazil',
  'Argentina',
  'Chile',
  'Mexico',
  'Colombia',
  'Peru',
  'Venezuela',
  'South Africa',
  'Nigeria',
  'Kenya',
  'Ghana',
  'Ethiopia',
  'Uganda',
  'Tanzania',
  'Rwanda',
  'Burundi',
  'Zimbabwe',
  'Zambia',
  'Botswana',
  'Namibia',
  'Mozambique',
  'Angola',
  'Congo',
  'Cameroon',
  'Gabon',
  'Equatorial Guinea',
  'Central African Republic',
  'Chad',
  'Niger',
  'Mali',
  'Burkina Faso',
  'Senegal',
  'Guinea',
  'Sierra Leone',
  'Liberia',
  'Ivory Coast',
  'Togo',
  'Benin',
  'Mauritania',
  'Morocco',
  'Algeria',
  'Tunisia',
  'Libya',
  'Sudan',
  'South Sudan',
  'Eritrea',
  'Djibouti',
  'Somalia',
  'Comoros',
  'Madagascar',
  'Mauritius',
  'Seychelles',
  'Cape Verde',
  'São Tomé and Príncipe',
  'Guinea-Bissau',
  'The Gambia',
  'Western Sahara'
];

const HFZASmartAssist: React.FC<HFZASmartAssistProps> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [selectedCompanyType, setSelectedCompanyType] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleIndustrySelect = (industry: string) => {
    setSelectedIndustry(industry);
    setStep(2);
  };

  const handleCompanyTypeSelect = (companyType: string) => {
    setSelectedCompanyType(companyType);
    setStep(3);
  };

  const handleCountrySelect = async (country: string) => {
    setSelectedCountry(country);
    setIsLoading(true);
    setError(null);
    
    try {
      const data = {
        industry: selectedIndustry,
        company_type: selectedCompanyType,
        country: country
      };
      
      const response = await api.sendHFZASmartAssistData(data);
      setApiResponse(response);
      
      if (onComplete) {
        onComplete(data);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send data to smarthelper API');
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      // Clear current step value and go back
      if (step === 3) {
        setSelectedCountry('');
        setApiResponse(null);
        setError(null);
        setIsLoading(false);
      } else if (step === 2) {
        setSelectedCompanyType('');
        setApiResponse(null);
        setError(null);
        setIsLoading(false);
      }
      setStep(step - 1);
    }
  };

  const getSelectedCompanyTypeLabel = () => {
    const companyType = companyTypes.find(ct => ct.value === selectedCompanyType);
    return companyType ? companyType.label : '';
  };

  const renderMarkdownContent = (content: string) => {
    if (!content) return '';
    
    return content
    .replace(/### (.*?)\n/g, '<h3 class="text-xl font-bold text-blue-300 mb-3 mt-6">$1</h3>')
    .replace(/## (.*?)\n/g, '<h2 class="text-2xl font-bold text-white mb-4 mt-8">$1</h2>')
    .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    .replace(/\n\n/g, '</p><p class="mb-4">')
    .replace(/\n/g, '<br>');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900/20 via-blue-900/30 to-purple-900/20 flex items-center justify-center p-4">
      <Card className="w-full bg-transparent border-0 backdrop-blur-sm">
        <CardContent className="p-8">
          {/* Header with Logo */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border-2 border-white/20">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center relative">
                    <div className="w-6 h-6 bg-red-500 rounded-sm transform rotate-45"></div>
                    <div className="absolute w-3 h-3 bg-blue-400 rounded-full top-1 left-1"></div>
                  </div>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-red-500/30 to-blue-500/30 rounded-full blur-lg"></div>
              </div>
            </div>
            
            <h1 className="text-3xl font-bold text-white mb-2">
              GM Freezone Smart Assist
            </h1>
            <p className="text-white/80 text-lg">
              Get personalized license requirements, timelines, and facility recommendations in seconds.
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-2">
              {[1, 2, 3].map((stepNumber) => (
                <div
                  key={stepNumber}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    step >= stepNumber ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Back Button */}
          {step > 1 && <div className="flex items-center justify-between mb-6">
                <Button
                  variant="ghost"
                  className="text-white/70 hover:text-white"
                  onClick={handleBack}
                >
                  ← Back
                </Button>
              </div>
          }

                    {/* Selected Details Chips */}
          {(selectedIndustry || selectedCompanyType || selectedCountry) && (
            <div className="flex flex-wrap gap-3 mb-6 justify-center">
                {selectedIndustry && (
                 <Badge variant="secondary" className="bg-blue-600/20 text-blue-300 border-blue-500/30 px-4 py-2 text-base font-medium">
                    {selectedIndustry}
                 </Badge>
                )}
                {selectedCompanyType && (
                 <Badge variant="secondary" className="bg-green-600/20 text-green-300 border-green-500/30 px-4 py-2 text-base font-medium">
                    {getSelectedCompanyTypeLabel()}
                 </Badge>
                )}
                {selectedCountry && (
                 <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 border-purple-500/30 px-4 py-2 text-base font-medium">
                    {selectedCountry}
                 </Badge>
                )}
              </div>
            )}

          {/* Step 1: Industry Selection */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white text-center mb-6">
                Which industry do you plan to set up your business in?
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {industries.map((industry) => (
                  <Button
                    key={industry}
                    variant="outline"
                    className={`h-16 bg-gray-800/50 border-gray-600 text-white hover:bg-blue-600/20 hover:border-blue-500 transition-all duration-300 ${
                      selectedIndustry === industry ? 'bg-blue-600/20 border-blue-500' : ''
                    }`}
                    onClick={() => handleIndustrySelect(industry)}
                  >
                    {industry}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Company Type Selection */}
          {step === 2 && (
            <div className="space-y-6">
            
              
              <h2 className="text-2xl font-bold text-white text-center mb-6">
                What type of company are you?
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center">
                {companyTypes.map((companyType) => (
                  <Button
                    key={companyType.value}
                    variant="outline"
                    className={`w-full h-20 bg-gray-800/50 border-gray-600 text-white hover:bg-blue-600/20 hover:border-blue-500 transition-all duration-300 ${
                      selectedCompanyType === companyType.value ? 'bg-blue-600/20 border-blue-500' : ''
                    }`}
                    onClick={() => handleCompanyTypeSelect(companyType.value)}
                  >
                    <div className="text-left">
                      <div className="font-semibold">{companyType.label}</div>
                      <div className="text-sm text-white/70">{companyType.description}</div>
                    </div>
                  </Button>
                ))}
              </div>
            </div>
          )}

                    {/* Step 3: Country Selection */}
          {step === 3 && !apiResponse && (
            <div className="space-y-6 max-w-md mx-auto">
             
                <h2 className="text-2xl font-bold text-white text-center mb-6">
                  Select your country
                </h2>
                <Select onValueChange={handleCountrySelect}>
                  <SelectTrigger className="w-full bg-gray-800/50 border-gray-600 text-white">
                    <SelectValue placeholder="Choose your country" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-600 max-h-60">
                    {countries.map((country) => (
                      <SelectItem
                        key={country}
                        value={country}
                        className="text-white hover:bg-gray-700 focus:bg-gray-700"
                      >
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

          {/* Loading State */}
          {isLoading && (
            <div className="mt-6 p-4 bg-blue-600/20 border border-blue-500/30 rounded-lg">
              <div className="text-center">
                <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-blue-400 mb-2"></div>
                <p className="text-blue-400">Sending data to smarthelper API...</p>
              </div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="mt-6 p-4 bg-red-600/20 border border-red-500/30 rounded-lg">
              <p className="text-red-400 text-center">
                Error: {error}
              </p>
            </div>
          )}

                    {/* API Response */}
          {apiResponse && (
            <div className="mt-6 p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Recommendations</h3>
              </div>
              
              <div className="prose prose-invert max-w-none">
                <div className="text-white/90 leading-relaxed space-y-4">
                  {apiResponse && (
                    <div 
                      className="text-sm"
                      dangerouslySetInnerHTML={{ __html: renderMarkdownContent(apiResponse) }}
                    />
                  )}
                </div>
              </div>
            </div>
          )}
          {apiResponse && (
            <div className="mt-4 flex justify-center">
              <Button
                variant="outline"
                className="bg-gray-800/50 border-gray-600 text-white hover:bg-blue-600/20 hover:border-blue-500"
                onClick={() => {
                  setStep(1);
                  setSelectedIndustry('');
                  setSelectedCompanyType('');
                  setSelectedCountry('');
                  setApiResponse(null);
                  setError(null);
                  setIsLoading(false);
                }}
              >
                Start Over
              </Button>
          </div>)}
        </CardContent>
      </Card>
    </div>
  );
};

export default HFZASmartAssist;