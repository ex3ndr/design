'use client';
import * as React from 'react';
import color from 'color';

function Button(props: { color: string }) {
  let parsed = color(props.color);
  let isDark = parsed.isDark();
  let startColor = parsed.darken(0.1);
  let endColor = parsed.lighten(0.2);
  let shadowColor = isDark ? parsed.alpha(0.2) : color('black').alpha(0.1);

  // Dynamic style
  let style = {
    background: `linear-gradient(${startColor.hex()}, ${endColor.hex()})`,
    boxShadow: `0 4px 4px ${shadowColor.rgb().string()}`,
    color: isDark ? 'white' : 'black',
  } satisfies React.CSSProperties;

  return (
    <button className='flex w-[128px] h-[48px] rounded-[24px] text-white justify-center items-center font-medium' style={style}>
      {props.color}
    </button>
  )
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start p-[24px]">
      <h1 className='mb-5'>Volumetric Button</h1>
      <div className='flex gap-4 flex-row flex-wrap'>
        <Button color='red' />
        <Button color='#1781F3' />
        <Button color='green' />
        <Button color='blue' />
        <Button color='black' />
        <Button color='grey' />
        <Button color='magenta' />
        <Button color='white' />
      </div>
    </main>
  );
}
