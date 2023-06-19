'use client';
import React, { useState } from 'react';

export default function Home() {
  const [position, setPosition] = useState('translate-y-[20%]');
  const [visible, setVisible] = useState('hidden');
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const [titlePosition, setTitlePosition] = useState(
    'translate-y-[calc(10%-40px)]'
  );

  function handleMouseEnter() {
    setPosition('translate-y-0');
    setVisible('visible');
  }
  function handleMouseLeave() {
    setPosition('translate-y-[20%]');
    setVisible('hidden');
  }

  function handleMouseEnterImage() {
    setIsDescriptionVisible(true);
  }
  function handleMouseLeaveImage() {
    setIsDescriptionVisible(false);
  }

  return (
    <div className="w-screen h-screen bg-white overflow-hidden z-10">
      <div className="relative max-h-screen max-w-screen aspect-square mx-auto">
        <img
          src="https://i.seadn.io/gcs/files/2d636179ce8717622779b4458c8f59c4.png"
          className="mx-auto h-full aspect-square"
        />
        <div
          className="absolute bottom-12 h-[20%] w-full"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={`relative ${position} bg-black/80 rounded-lg rounded-tr-none transition duration-300 z-0 hover:cursor-pointer`}
          >
            <div className={`flex text-white justify-between pr-4 text-3xl`}>
              <p className={``}>
                {isDescriptionVisible ? 'Description goes here' : ' '}
              </p>
              <p className="flex justify-end">View Inventory</p>
            </div>
            <div
              className={`grid grid-cols-6 bg-black/50 rounded-lg rounded-tr-none gap-x-3 p-3 aspect-square `}
            >
              <div
                className="w-full rounded-lg bg-white aspect-square rounded-lg"
                onMouseEnter={handleMouseEnterImage}
                onMouseLeave={handleMouseLeaveImage}
              >
                <img
                  className="rounded-lg"
                  src="https://img.freepik.com/premium-vector/crown-with-ruby-with-pixel-art-style_475147-330.jpg"
                />
              </div>
              <div
                className="w-full rounded-lg bg-white aspect-square rounded-lg"
                onMouseEnter={handleMouseEnterImage}
                onMouseLeave={handleMouseLeaveImage}
              >
                <img
                  className="rounded-lg"
                  src="https://static.vecteezy.com/system/resources/previews/009/877/855/non_2x/pixel-art-laptop-computer-with-graphics-on-the-screen-8-bit-game-item-on-white-background-vector.jpg"
                />
              </div>
              <div
                className="w-full rounded-lg bg-white aspect-square rounded-lg"
                onMouseEnter={handleMouseEnterImage}
                onMouseLeave={handleMouseLeaveImage}
              >
                <img
                  className="rounded-lg"
                  src="https://art.ngfiles.com/images/1250000/1250737_flexviper_gold-coins-pixel-art.png?f1587955202"
                />
              </div>
              <div
                className="w-full rounded-lg bg-white aspect-square rounded-lg"
                onMouseEnter={handleMouseEnterImage}
                onMouseLeave={handleMouseLeaveImage}
              >
                <img
                  className="rounded-lg"
                  src="https://static.wikia.nocookie.net/stardewvalley/images/f/fc/Horse1.jpg/"
                />
              </div>
              <div className="w-full rounded-lg bg-white aspect-square rounded-lg"></div>
              <div className="w-full rounded-lg bg-white aspect-square rounded-lg"></div>
              <div className="w-full rounded-lg bg-white aspect-square rounded-lg">
                3
              </div>
              <div className="w-full rounded-lg bg-white aspect-square rounded-lg">
                4
              </div>
              <div className="w-full rounded-lg bg-white aspect-square rounded-lg">
                5
              </div>
              <div className="w-full rounded-lg bg-white aspect-square rounded-lg">
                6
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
