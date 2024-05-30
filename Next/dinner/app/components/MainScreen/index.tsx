import Head from 'next/head';
import Link from 'next/link';
import DineAlertButtons from '../Buttons';

export default function DineAlertPage() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center text-white">
      <Head>
        <title>Dinner Alert</title>
        <meta name="description" content="Dine Alert App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-grow flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-8">
          Welcome to{' '}
          <Link href="/" className="text-blue-500">
            Dinner Alert!
          </Link>
        </h1>

        <DineAlertButtons />
      </main>
    </div>
  );
}



























// import Head from 'next/head';
// import Link from 'next/link';
// import DineAlertButtons from '../Buttons';

// export default function DineAlertPage() {
//   return (
//     <div className="min-h-screen bg-gray-900 flex flex-col justify-center items-center text-white">
//       <Head>
//         <title>Dinner Alert</title>
//         <meta name="description" content="Dine Alert App" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className="flex-grow flex flex-col justify-center items-center">
//         <h1 className="text-3xl font-bold mb-8">
//           Welcome to{' '}
//           <Link href="/" className="text-blue-500">
//             Dinner Alert!
//           </Link>
//         </h1>

//         <DineAlertButtons />
//       </main>
//     </div>
//   );
}
