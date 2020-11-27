import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiOutlineLock } from 'react-icons/ai';
import { TiShoppingCart } from 'react-icons/ti';
import { MdLocationOn } from 'react-icons/md';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Select from 'react-select';
import { DataProvider } from '../../contexts/DataContext';
import { useIntl } from 'react-intl';
import { AnimatePresence, motion } from 'framer-motion';
export default function RightSection({
  data,
  handleAddToCart,
  quantity,
  setQuantity,
  handleRemoveFromCart,
  quantityOptions,
  addToCartButtonLoading,
  addToWishListButtonLoading,
  handleAddToWishList,
  handleRemoveFromWishList,
  itemInWishList,
  itemInCart,
  isAuthenticated,
}) {
  const { formatMessage } = useIntl();
  const [snackBarOpen, setSnackBarOpen] = React.useState(false);
  const { deliveryCountry } = React.useContext(DataProvider);
  const addToWishList = () => {
    if (!isAuthenticated) {
      setSnackBarOpen(true);
      setTimeout(() => {
        setSnackBarOpen(false);
      }, 5000);
      return;
    }
    if (itemInWishList) {
      handleRemoveFromWishList(data.id);
    } else {
      handleAddToWishList();
    }
  };
  return (
    <div
      className="border  p-2 rounded shadow-sm self-start sticky  "
      style={{ top: '108px' }}
    >
      <div className="">
        <h1>
          Sold By <span className="font-semibold">MRG</span>
        </h1>
        <h1>
          Delivered By <span className="font-semibold">MRG</span>
        </h1>
      </div>
      <hr />
      <div className={` rounded py-1  my-1 text-sm`}>
        <div className="flex justify-between items-center font-semibold  ">
          <div className="flex items-center ">
            <div className="flex items-center">
              <h1>{formatMessage({ id: 'deliver-to' })}</h1>
              <h1 className="uppercase mx-2">{deliveryCountry}</h1>
              <MdLocationOn className="w-5 h-5 text-red-800 " />
            </div>
          </div>
          <button className={`py-0 px-2 text-xs bg-gray-200 rounded`}>
            {formatMessage({ id: 'change' })}
          </button>
        </div>
        <div className="">
          <div className="flex items-center">
            <h1 className="text-gray-700">
              {formatMessage({ id: 'estimated-delivery' })} :
            </h1>
            <h1 className="mx-1">October 8</h1>
          </div>

          <div className="flex items-center">
            <h1 className="text-gray-700">
              {formatMessage({ id: 'fastest-delivery' })} :
            </h1>
            <h1 className="mx-1">October 6</h1>
          </div>
        </div>
      </div>

      <hr className="mb-2" />
      <div className=" mr-2 flex justify-center items-center mb-2">
        <h1 className=" mr-2 flex-1 font-semibold">
          {formatMessage({ id: 'quantity' })} :{' '}
        </h1>
        <div className="mx-3 flex-1">
          <Select
            onChange={selectedOption => setQuantity(selectedOption)}
            options={quantityOptions}
            className="p-1"
            isSearchable={false}
            value={quantity}
          />
        </div>
      </div>
      <hr />
      <div className="text-gray-700 flex items-center justify-center py-2">
        <h1 className="hover:underline cursor-pointer">
          {formatMessage({ id: 'secure-transaction' })}
        </h1>
        <AiOutlineLock className="h-5 w-5 mx-1 " />
      </div>
      <div className="flex flex-col relative">
        <button
          onClick={() => {
            if (itemInCart) {
              handleRemoveFromCart(data.id);
            } else {
              handleAddToCart();
            }
          }}
          className={`${
            addToCartButtonLoading
              ? 'bg-gray-300'
              : itemInCart
              ? 'bg-main-color'
              : 'bg-green-700'
          } flex-1 text-main-text  py-2 px-2 rounded mb-2   flex items-center justify-center font-semibold uppercase`}
        >
          {addToCartButtonLoading ? (
            <Loader
              type="ThreeDots"
              color="#b72b2b"
              height={20}
              width={20}
              visible={addToCartButtonLoading}
            />
          ) : itemInCart ? (
            <>
              <span>
                <TiShoppingCart className="w-25p h-25p " />
              </span>
              <h1 className="mx-2 whitespace-no-wrap">
                {formatMessage({ id: 'remove-from-cart' })}
              </h1>
            </>
          ) : (
            <>
              <span>
                <TiShoppingCart className="w-25p h-25p" />
              </span>
              <h1 className="mx-2">{formatMessage({ id: 'add-to-cart' })}</h1>
            </>
          )}
        </button>

        <button
          onClick={addToWishList}
          className={`${
            addToWishListButtonLoading
              ? 'bg-gray-300'
              : itemInWishList
              ? 'border-main-color text-main-color border'
              : 'border-main-color text-main-color border'
          } flex-1   py-2 px-2 rounded mb-2   flex items-center justify-center font-semibold uppercase`}
        >
          {addToWishListButtonLoading ? (
            <Loader
              type="ThreeDots"
              color="#b72b2b"
              height={20}
              width={20}
              visible={addToWishListButtonLoading}
            />
          ) : itemInWishList ? (
            <>
              <span>
                <TiShoppingCart className="w-25p h-25p " />
              </span>
              <h1 className="mx-2 whitespace-no-wrap">
                {formatMessage({ id: 'remove-from-wishlist' })}
              </h1>
            </>
          ) : (
            <>
              <span>
                <AiOutlineHeart className="w-25p h-25p" />
              </span>
              <h1 className="mx-2">
                {formatMessage({ id: 'add-to-wishlist' })}
              </h1>
            </>
          )}
        </button>
        <AnimatePresence>
          {snackBarOpen && (
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 10, opacity: 0 }}
              className="box-arrow text-xs shadow text-center rounded p-2 "
            >
              Please log in to Add
            </motion.div>
          )}
        </AnimatePresence>

        {/* <button className="border border-main-color py-2 px-2 rounded uppercase  text-main-color flex items-center justify-center font-semibold ">
          <span>
            <AiOutlineHeart className="w-25p h-25p" />
          </span>
          <h1 className="mx-1">{formatMessage({ id: 'add-to-wishlist' })}</h1>
        </button> */}
      </div>
    </div>
  );
}
