'use client';
import * as React from 'react';
import color from 'color';

function Button(props: { color: string }) {
  let parsed = color(props.color);
  let isDark = parsed.isDark();
  let gradient1 = parsed.lighten(0.2);
  let gradient2 = parsed.lighten(0.1);
  let gradient3 = parsed.lighten(0.05);
  let gradient4 = parsed.darken(0.05);
  let shadowColor = isDark ? parsed.alpha(0.2) : color('black').alpha(0.1);

  // Dynamic style
  let style = {
    background: `linear-gradient(${gradient1.hex()} 0%, ${gradient2.hex()} 40%, ${gradient3.hex()} 70%, ${gradient4.hex()} 100%)`,
    boxShadow: `0 4px 4px ${shadowColor.rgb().string()}`,
    color: isDark ? 'white' : 'black',
  } satisfies React.CSSProperties;

  return (
    <button className='flex w-[128px] h-[48px] rounded-[24px] text-white justify-center items-center font-medium' style={style}>
      <span>
        btn{' '}
        <span className='opacity-70'>
          {props.color}
        </span>
      </span>
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
