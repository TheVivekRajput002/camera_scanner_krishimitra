import React, { useState, useRef } from 'react';
import { Camera, Upload, Apple, AlertCircle } from 'lucide-react';

const CropHealthScanner = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
        simulateScan();
      };
      reader.readAsDataURL(file);
    }
  };

  const simulateScan = () => {
    setIsScanning(true);
    setScanResult(null);
    
    setTimeout(() => {
      setIsScanning(false);
      setScanResult({
        disease: "टमाटर पत्ता",
        confidence: "85%",
        status: "प्रारंभिक छत्रा रोग",
        recommendations: "2 घंटे पहले"
      });
    }, 2000);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl p-6 shadow-lg">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-semibold text-green-800 mb-2">फसल स्वास्थ्य स्कैनर</h1>
        <p className="text-gray-600 text-sm">कोट और बीमारियों का पता लगाने के लिए फोटो लें</p>
      </div>

      {/* Camera/Upload Area */}
      <div 
        onClick={triggerFileInput}
        className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-dashed border-green-400 rounded-xl p-12 text-center mb-5 cursor-pointer hover:from-green-100 hover:to-green-200 transition-all duration-300"
      >
        {selectedImage ? (
          <div className="relative">
            <img 
              src={selectedImage} 
              alt="Selected crop" 
              className="w-full h-48 object-cover rounded-lg"
            />
            {isScanning && (
              <div className="absolute inset-0 bg-green-600 bg-opacity-20 rounded-lg flex items-center justify-center">
                <div className="animate-spin w-8 h-8 border-3 border-white border-t-transparent rounded-full"></div>
              </div>
            )}
          </div>
        ) : (
          <div>
            <Camera className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <p className="text-green-700 font-medium">फोटो लें या अपलोड करें</p>
          </div>
        )}
      </div>

      {/* Camera Button */}
      <button 
        onClick={triggerFileInput}
        className="w-full bg-green-600 text-white py-3 rounded-xl font-medium mb-4 flex items-center justify-center gap-2 hover:bg-green-700 transition-colors"
      >
        <Camera className="w-5 h-5" />
        फोटो लें
      </button>

      {/* Upload Button */}
      <button 
        onClick={triggerFileInput}
        className="w-full border border-green-600 text-green-600 py-2 rounded-xl font-medium mb-6 flex items-center justify-center gap-2 hover:bg-green-50 transition-colors"
      >
        <Upload className="w-4 h-4" />
        गैलरी से अपलोड करें
      </button>

      {/* Photo Tips */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
        <div className="flex items-start gap-2 mb-2">
          <Camera className="w-5 h-5 text-yellow-600 mt-0.5" />
          <h3 className="font-medium text-yellow-800">फोटो टिप्स</h3>
        </div>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>• स्पष्ट, अच्छी रोशनी में फोटो लें</li>
          <li>• प्रभावित पत्तियों या हिस्सों पर फोकस करें</li>
          <li>• यदि संभव हो तो कई कोणों से फोटो लें</li>
        </ul>
      </div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
        capture="environment"
      />

      {/* Loading state */}
      {isScanning && (
        <div className="text-center text-green-600 font-medium">
          स्कैन हो रहा है...
        </div>
      )}
    </div>
  );
};

export default CropHealthScanner;