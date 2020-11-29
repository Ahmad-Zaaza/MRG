import { motion } from 'framer-motion';
import React from 'react';
import { useIntl } from 'react-intl';
import { MoonLoader } from 'react-spinners';

export default function LocationMobile({
  data,
  handleRemoveLocation,
  deleteButtonLoading,
}) {
  const { formatMessage } = useIntl();

  const cardVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
    },
    exited: {
      opacity: 0,
      clipPath: 'polygon(0 54%, 100% 53%, 100% 53%, 0 54%)',
    },
  };
  return (
    <motion.div
      layout
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exited"
      className="rounded border shadow-itemsSlider-shallow bg-body-light"
    >
      <div style={{ minHeight: '100px' }}>
        <img
          src={`https://maps.googleapis.com/maps/api/staticmap?center=${data.lat},${data.lng}&zoom=15&size=150x100&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}
          alt="thumbnail"
        />
      </div>
      <div className="p-2">
        <div className="text-sm mb-2 font-semibold" style={{ height: '63px' }}>
          <h1>{data.marked_address}</h1>
        </div>
        <button
          onClick={() => handleRemoveLocation(data.id)}
          className={` ${
            deleteButtonLoading === data.id ? 'bg-gray-300' : 'bg-main-color'
          } text-main-text rounded   px-2 py-1 text-sm w-full flex justify-center`}
        >
          {deleteButtonLoading === data.id ? (
            <MoonLoader size={17} color="#b72b2b" />
          ) : (
            <h1>{formatMessage({ id: 'remove-location' })}</h1>
          )}
        </button>
      </div>
    </motion.div>
  );
}