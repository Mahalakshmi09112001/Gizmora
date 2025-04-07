import React, { useEffect, useState } from 'react';
import SummaryApi from '../common';
import moment from 'moment';
import displayINRCurrency from '../helpers/displayCurrency';

const OrderPage = () => {
  const [data, setData] = useState([]);

  const fetchOrderDetails = async () => {
    try {
      const response = await fetch(SummaryApi.getOrder.url, {
        method: SummaryApi.getOrder.method,
        credentials: 'include',
      });
      const responseData = await response.json();
      setData(responseData.data || []);
      console.log('order list', responseData);
    } catch (error) {
      console.error('Failed to fetch orders:', error);
    }
  };

  useEffect(() => {
    fetchOrderDetails();
  }, []);

  return (
    <div>
      {!data[0] && <p className="text-center p-4">No Orders Available</p>}
      <div className="p-4 w-full max-w-4xl mx-auto">
        {data.map((item, index) => (
          <div key={item._id || index} className="mb-6 border rounded p-4 shadow-sm bg-white">
            <p className="font-medium text-lg mb-2">
              Order Date: {moment(item.createdAt).format('LL')}
            </p>

            <div className="flex flex-col lg:flex-row justify-between gap-4">
              {/* Product List */}
              <div className="grid gap-3">
                {Array.isArray(item.productDetails) && item.productDetails.length > 0 ? (
                  item.productDetails.map((product, idx) => (
                    <div key={product.productId + idx} className="flex gap-3 bg-slate-100 p-3 rounded">
                      <div>
                        <div className="font-medium text-lg line-clamp-1">
                          {product.name || 'No name'}
                        </div>
                        <div className="flex items-center gap-5 mt-1">
                          <div className="text-lg text-red-500">
                            {displayINRCurrency(product.price || 0)}
                          </div>
                          <p>Quantity: {product.quantity || 1}</p>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No product details available</p>
                )}
              </div>

              {/* Payment + Shipping */}
              <div className="flex flex-col gap-4 p-2 min-w-[320px]">
                <div>
                  <div className="text-lg font-medium">Payment Details:</div>
                  <p className="ml-1">
                    Method: {item.paymentDetails?.payment_method_type?.[0] || 'N/A'}
                  </p>
                  <p className="ml-1">
                    Status: {item.paymentDetails?.payment_status || 'N/A'}
                  </p>
                </div>

                <div>
                  <div className="text-lg font-medium">Shipping Details:</div>
                  {Array.isArray(item.shipping_options) && item.shipping_options.length > 0 ? (
                    item.shipping_options.map((shipping, idx) => (
                      <div key={shipping.shipping_rate + idx} className="ml-1">
                        Shipping Amount: {displayINRCurrency(shipping.shipping_amount || 0)}
                      </div>
                    ))
                  ) : (
                    <p className="ml-1">No shipping info</p>
                  )}
                </div>
              </div>
            </div>

            {/* Total */}
            <div className="text-right font-semibold mt-4 text-lg">
              Total Amount: {displayINRCurrency(item.totalAmount || 0)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderPage;
