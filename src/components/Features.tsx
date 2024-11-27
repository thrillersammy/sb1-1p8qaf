import React from 'react';
import { Key, Shield, Lock, Wifi, RefreshCcw, Fingerprint } from 'lucide-react';

const features = [
  {
    icon: Key,
    title: 'Password Generation',
    description: 'Generate strong, unique passwords with our advanced algorithm.',
  },
  {
    icon: Shield,
    title: 'Encrypted Storage',
    description: 'Your data is protected with AES-256 bit encryption.',
  },
  {
    icon: Wifi,
    title: 'WiFi Security',
    description: 'Monitor and protect your wireless networks from threats.',
  },
  {
    icon: Lock,
    title: 'Secure Sharing',
    description: 'Share passwords securely with team members or family.',
  },
  {
    icon: RefreshCcw,
    title: 'Auto Sync',
    description: 'Access your passwords across all your devices.',
  },
  {
    icon: Fingerprint,
    title: 'Two-Factor Auth',
    description: 'Add an extra layer of security to your account.',
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Advanced Security Features
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Protect your digital identity with our comprehensive suite of security tools
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-xl border border-gray-100 hover:border-blue-600 transition-colors group"
            >
              <div className="p-3 bg-blue-50 rounded-lg w-fit group-hover:bg-blue-100 transition-colors">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}