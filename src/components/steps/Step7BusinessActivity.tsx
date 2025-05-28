import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store';
import { setBusinessActivityField } from '../../store/slices/formSlice';

export const Step7BusinessActivity: React.FC = () => {
  const { t } = useTranslation();
  const { businessActivity } = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch();
  return (
    <section className="step" data-step="7">
      <h2 className="text-xl font-semibold mb-4" data-i18n="step7_title">7. Business Activity</h2>

      <label>
        <span data-i18n="profession_activity">{t('profession_activity')}</span>
        <textarea
          name="business_activities"
          required
          className="w-full mt-1 border px-3 py-2 rounded"
          value={businessActivity.professionActivity}
          onChange={(e) => dispatch(setBusinessActivityField({ field: 'professionActivity', value: e.target.value }))}
        ></textarea>
      </label>

      <label>
        <span data-i18n="business_description">{t('business_description')}</span>
        <textarea
          name="business_description"
          required
          className="w-full mt-1 border px-3 py-2 rounded"
          value={businessActivity.businessDescription}
          onChange={(e) => dispatch(setBusinessActivityField({ field: 'businessDescription', value: e.target.value }))}
        ></textarea>
      </label>

      <label>
        <span data-i18n="target_clients">{t('target_clients')}</span>
        <input
          type="text"
          name="business_clients"
          required
          className="w-full mt-1 border px-3 py-2 rounded"
          value={businessActivity.targetClients}
          onChange={(e) => dispatch(setBusinessActivityField({ field: 'targetClients', value: e.target.value }))}
        />
      </label>

      <label>
        <span data-i18n="main_countries">{t('main_countries')}</span>
        <select
          name="business_countries"
          className="tom-select-country w-full"
          multiple
          required
          value={businessActivity.mainCountries}
          onChange={(e) => dispatch(setBusinessActivityField({ field: 'mainCountries', value: Array.from(e.target.selectedOptions, option => option.value) }))}
        >
          <option value="Switzerland">Switzerland</option>
        </select>
      </label>
    </section>
  )
}