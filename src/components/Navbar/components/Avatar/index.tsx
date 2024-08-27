import Image from 'next/image';

export function Avatar() {
  return (
    <section className="size-full">
      <section className="size-full">
        <Image
          src="https://p9-passport.byteacctimg.com/img/user-avatar/5c3a0a8f4f1b471a9e2c49398609aaf9~80x80.awebp"
          alt="avatar"
          width={40}
          height={40}
          className="rounded-full overflow-hidden"
        />
      </section>
      {/* todo: 展开列表 */}
    </section>
  );
}
