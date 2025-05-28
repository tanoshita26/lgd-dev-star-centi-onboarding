import React, { useRef } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import type { RootState } from '../../store';
import { setCompanyInfoField } from '../../store/slices/formSlice';

export const Step2GeneralInformation: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { companyInfo, validationErrors } = useSelector((state: RootState) => state.form);
  const ref = useRef<HTMLInputElement>(null);

  const getErrorClass = (fieldName: string) => {
    return validationErrors[fieldName] ? 'border-red-500' : '';
  };

  return (
    <section className="step" data-step="2" ref={ref}>
      <h2 className="text-xl font-semibold mb-4" data-i18n="step2_title">2. General Information</h2>

      <label className="block">
        <span data-i18n="company_name">{t('company_name')}</span>
        <input
          type="text"
          name="company_name"
          required
          className={`w-full mt-1 border px-3 py-2 rounded ${getErrorClass('name')}`}
          value={companyInfo.name}
          onChange={(e) => dispatch(setCompanyInfoField({ field: 'name', value: e.target.value }))}
        />
        {validationErrors.name && (
          <span className="text-red-500 text-sm mt-1">{validationErrors.name}</span>
        )}
      </label>

      <div className="grid grid-cols-2 gap-4">
        <label>
          <span data-i18n="address_street">{t('address_street')}</span>
          <input
            type="text"
            name="street"
            required
            className={`w-full mt-1 border px-3 py-2 rounded ${getErrorClass('address')}`}
            value={companyInfo.address}
            onChange={(e) => dispatch(setCompanyInfoField({ field: 'address', value: e.target.value }))}
          />
          {validationErrors.address && (
            <span className="text-red-500 text-sm mt-1">{validationErrors.address}</span>
          )}
        </label>
        <label>
          <span data-i18n="postal_code">{t('postal_code')}</span>
          <input
            type="text"
            name="postal_code"
            required
            className={`w-full mt-1 border px-3 py-2 rounded ${getErrorClass('postal')}`}
            value={companyInfo.postal}
            onChange={(e) => dispatch(setCompanyInfoField({ field: 'postal', value: e.target.value }))}
          />
          {validationErrors.postal && (
            <span className="text-red-500 text-sm mt-1">{validationErrors.postal}</span>
          )}
        </label>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <label>
          <span data-i18n="city">{t('city')}</span>
          <input
            type="text"
            name="city"
            required
            className={`w-full mt-1 border px-3 py-2 rounded ${getErrorClass('city')}`}
            value={companyInfo.city}
            onChange={(e) => dispatch(setCompanyInfoField({ field: 'city', value: e.target.value }))}
          />
          {validationErrors.city && (
            <span className="text-red-500 text-sm mt-1">{validationErrors.city}</span>
          )}
        </label>
        <label>
          <span data-i18n="canton">{t('canton')}</span>
          <input
            type="text"
            name="canton"
            required
            className={`w-full mt-1 border px-3 py-2 rounded ${getErrorClass('canton')}`}
            value={companyInfo.canton}
            onChange={(e) => dispatch(setCompanyInfoField({ field: 'canton', value: e.target.value }))}
          />
          {validationErrors.canton && (
            <span className="text-red-500 text-sm mt-1">{validationErrors.canton}</span>
          )}
        </label>
      </div>

      <label>
        <span data-i18n="phone">{t('phone')}</span>
        <input
          type="tel"
          name="phone"
          className="w-full mt-1 border px-3 py-2 rounded"
          value={companyInfo.phone}
          onChange={(e) => dispatch(setCompanyInfoField({ field: 'phone', value: e.target.value }))}
        />
      </label>

      <label>
        <span data-i18n="email">{t('email')}</span>
        <input
          type="email"
          name="email"
          required
          className={`w-full mt-1 border px-3 py-2 rounded ${getErrorClass('email')}`}
          value={companyInfo.email}
          onChange={(e) => dispatch(setCompanyInfoField({ field: 'email', value: e.target.value }))}
        />
        {validationErrors.email && (
          <span className="text-red-500 text-sm mt-1">{validationErrors.email}</span>
        )}
      </label>

      <label>
        <span data-i18n="industry">{t('industry')}</span>
        <select
          name="industry"
          id="industry"
          required
          className={`w-full mt-1 border px-3 py-2 rounded ${getErrorClass('industry')}`}
          value={companyInfo.industry}
          onChange={(e) => dispatch(setCompanyInfoField({ field: 'industry', value: e.target.value }))}
        >
          <option value="">-- Select --</option>
          <option value="psp">{t('psp')}</option>
          <option value="acquirer">{t('acquirer')}</option>
          <option value="event">{t('event')}</option>
          <option value="media">{t('media')}</option>
          <option value="publisher">{t('publisher')}</option>
          <option value="other">{t('other')}</option>
        </select>
        {validationErrors.industry && (
          <span className="text-red-500 text-sm mt-1">{validationErrors.industry}</span>
        )}
      </label>

      <div
        id="industryWarning"
        className={companyInfo.industry === 'other' ? "text-sm text-red-500" : "text-sm text-red-500 hidden"}
      >
        {t('industry_warning')}
      </div>
    </section>
  )
}