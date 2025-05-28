import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store';
import {
  setTransactionNature,
  setTransactionOrigin,
  setTransactionCategory,
  setTransactionMonthlyVolume,
  setTransactionMonthlyVolumeCurrency,
  setIsOtherCategory,
} from '../../store/slices/formSlice';
export const Step9Transaction: React.FC = () => {
  const { t } = useTranslation();
  const { transactionInfo } = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch();

  return (
    <section className="step" data-step="9">
      <h2 className="text-xl font-semibold mb-4" data-i18n="step9_title">9. Transaction Information</h2>

      <label>
        <span data-i18n="asset_nature">{t('asset_nature')}</span>
        <input
          type="text"
          name="asset_nature"
          required
          className="w-full mt-1 border px-3 py-2 rounded"
          value={transactionInfo.assetNature}
          onChange={(e) => dispatch(setTransactionNature(e.target.value))} />
      </label>

      <label>
        <span data-i18n="asset_origin">Origin of assets</span>
        <input
          type="text"
          name="asset_origin"
          disabled
          value="Consumer payment transactions for goods and services"
          className="w-full mt-1 border px-3 py-2 rounded bg-gray-100"
          onChange={(e) => dispatch(setTransactionOrigin(e.target.value))} />
      </label>

      <fieldset className="space-y-2">
        <legend className="font-medium" data-i18n="asset_category">Category of assets</legend>
        <label>
          <input
            type="checkbox"
            name="asset_category"
            value="business"
            checked={transactionInfo.assetCategory === 'business'}
            onChange={(e) => dispatch(setTransactionCategory(e.target.value))} />
          <span data-i18n="cat_business">
            {" Business operations  "}
          </span>
        </label>
        <label>
          <input
            type="checkbox"
            name="asset_category"
            value="other"
            checked={transactionInfo.isOtherCategory}
            id="catOther"
            onChange={() => dispatch(setIsOtherCategory(!transactionInfo.isOtherCategory))} />
          <span data-i18n="cat_other">{" Other"}</span>
        </label>
        <input
          type="text"
          id="catOtherInput"
          name="asset_category_other"
          value={transactionInfo.assetCategory}
          className={!transactionInfo.isOtherCategory ? "hidden mt-2 w-full border px-3 py-2 rounded" : "mt-2 w-full border px-3 py-2 rounded"}
          placeholder="Describe other category"
          onChange={(e) => dispatch(setTransactionCategory(e.target.value))} />
      </fieldset>

      <label>
        <span data-i18n="monthly_volume">Expected monthly business volume (CHF)</span>
        <input
          type="number"
          name="monthly_volume"
          required
          className="w-full mt-1 border px-3 py-2 rounded"
          value={transactionInfo.monthlyVolume}
          onChange={(e) => dispatch(setTransactionMonthlyVolume(Number(e.target.value)))} />
      </label>

      <label>
        <span data-i18n="business_purpose">Purpose of the business relationship</span>
        <select
          name="business_purpose"
          required
          multiple
          value={transactionInfo.monthlyVolumeCurrency}
          onChange={(e) => dispatch(setTransactionMonthlyVolumeCurrency(e.target.value))}
          className="tom-select-purpose w-full mt-1 border px-3 py-2 rounded">
          <option value="payment">Payment facilitation</option>
          <option value="fiduciary">Fiduciary services</option>
          <option value="exchange">Exchange services</option>
        </select>
      </label>
    </section >
  )
}