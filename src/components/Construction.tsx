import React from 'react';
import Image from 'next/image';

function Construction() {
  return (
    <div className="md:block text-center">
      <p className="text-lg m-8">Page en cours de construction</p>
      <Image
        src="/images/start_building.svg"
        alt="Page Building"
        width={900}
        height={600}
      />
    </div>
  );
}

export default Construction;
