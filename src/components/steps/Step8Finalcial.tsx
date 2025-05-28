import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import type { RootState } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import { setFinancialInfoField } from '../../store/slices/formSlice';

export const Step8Finalcial: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { financialInfo } = useSelector((state: RootState) => state.form);
  return (
    <section className="step" data-step="8">
      <h2 className="text-xl font-semibold mb-4" data-i18n="step8_title">8. Financial Information</h2>

      <label>
        <span data-i18n="annual_revenue">{t('annual_revenue')}</span>
        <select
          name="annual_revenue"
          required
          className="w-full mt-1 border px-3 py-2 rounded"
          value={financialInfo.annualRevenue}
          onChange={(e) => dispatch(setFinancialInfoField({ field: 'annualRevenue', value: e.target.value }))}
        >
          <option value="">-- Select --</option>
          <option value="<50k">&lt; 50,000 CHF</option>
          <option value="50k-250k">50,000 – 250,000 CHF</option>
          <option value="250k-1m">{t('250k-1m')}</option>
          <option value=">1m">{t('>1m')}</option>
        </select>
      </label>

      <label>
        <span data-i18n="total_assets">{t('total_assets')}</span>
        <select
          name="total_assets"
          required
          className="w-full mt-1 border px-3 py-2 rounded"
          value={financialInfo.totalAssets}
          onChange={(e) => dispatch(setFinancialInfoField({ field: 'totalAssets', value: e.target.value }))}
        >
          <option value="">-- Select --</option>
          <option value="<50k">&lt; 50,000 CHF</option>
          <option value="50k-250k">50,000 – 250,000 CHF</option>
          <option value="250k-1m">{t('250k-1m')}</option>
          <option value=">1m">{t('>1m')}</option>
        </select>
      </label>

      <label>
        <span data-i18n="liabilities">{t('liabilities')}</span>
        <select
          name="liabilities"
          className="w-full mt-1 border px-3 py-2 rounded"
          value={financialInfo.liabilities}
          onChange={(e) => dispatch(setFinancialInfoField({ field: 'liabilities', value: e.target.value }))}
        >
          <option value="">-- Select --</option>
          <option value="<50k">&lt; 50,000 CHF</option>
          <option value="50k-250k">50,000 – 250,000 CHF</option>
          <option value="250k-1m">{t('250k-1m')}</option>
          <option value=">1m">{t('>1m')}</option>
        </select>
      </label>
    </section>
  )
}