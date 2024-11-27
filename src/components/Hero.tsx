import React from 'react';
import { ArrowRight, Key, Wifi, Shield } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10" />
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="text-lg font-medium text-blue-600">SecureVault</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Secure Your Digital Life with{' '}
            <span className="text-blue-600">Confidence</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Protect your WiFi networks and manage passwords with military-grade encryption. 
            Your security is our top priority.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
              Try Free
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="px-8 py-3 border border-gray-300 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
              See How It Works
            </button>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-6">
            <SecurityFeature icon={Key} text="Password Manager" />
            <SecurityFeature icon={Wifi} text="WiFi Security" />
            <SecurityFeature icon={Shield} text="Data Protection" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SecurityFeature({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <div className="flex items-center gap-3 text-gray-600">
      <div className="p-2 bg-blue-100 rounded-lg">
        <Icon className="h-5 w-5 text-blue-600" />
      </div>
      <span className="font-medium">{text}</span>
    </div>
  );
}