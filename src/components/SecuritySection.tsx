import React from 'react';
import { ShieldCheck, Lock, Eye } from 'lucide-react';

export function SecuritySection() {
  return (
    <section id="security" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Enterprise-Grade Security
          </h2>
          <p className="text-gray-600">
            Your security is our top priority. We use industry-leading encryption 
            and security practices to keep your data safe.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <SecurityCard
            icon={ShieldCheck}
            title="AES-256 Encryption"
            description="Military-grade encryption for all stored data"
          />
          <SecurityCard
            icon={Lock}
            title="Zero-Knowledge"
            description="We can't access your data - only you have the key"
          />
          <SecurityCard
            icon={Eye}
            title="Privacy First"
            description="Your data never leaves your device unencrypted"
          />
        </div>
      </div>
    </section>
  );
}

function SecurityCard({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: any; 
  title: string; 
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="p-3 bg-blue-50 rounded-lg w-fit mb-4">
        <Icon className="h-6 w-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}