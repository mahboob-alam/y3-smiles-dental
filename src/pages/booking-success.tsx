import React from "react";

const BookingSuccessPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-50 flex items-center">
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-2xl mx-auto text-center bg-white/80 backdrop-blur-sm rounded-2xl border border-neutral-200 shadow-lg p-10">
          <div className="mb-4 text-4xl">🎉</div>
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">Booking Confirmed</h1>
          <p className="text-neutral-700 mb-6">
            Thank you for booking with Y3 Smiles Dental. A confirmation has been sent to your email. 
            If you need to make any changes, please call us at <a className="text-primary font-semibold" href="tel:03 9022 4442">(03) 9022 4442</a>.
          </p>
          <div className="text-sm text-neutral-600">
            Tip: Add the appointment to your calendar so you don’t miss it.
          </div>
        </div>
      </div>
    </main>
  );
};

export default BookingSuccessPage;
