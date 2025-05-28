import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store';
import { setVerificationInfoField } from '../../store/slices/formSlice';

export const Step12Verification: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const verificationInfo = useSelector((state: RootState) => state.form.verificationInfo);
  return (
    <section className="step" data-step="12">
      <h2 className="text-xl font-semibold mb-4" data-i18n="step12_title">12. Verification Method</h2>

      <label className="block font-medium mb-2" data-i18n="verification_method">
        {t('verification_method')}
      </label>

      <select
        name="verification_method"
        id="verification_method"
        required
        className="w-full border px-3 py-2 rounded"
        value={verificationInfo.verificationMethod}
        onChange={(e) => dispatch(setVerificationInfoField({ field: 'verificationMethod', value: e.target.value }))}
      >
        <option value="">-- Select --</option>
        <option value="office">In-person at Centi office</option>
        <option value="client_site">In-person at client's location</option>
        <option value="video">Video identification</option>
      </select>

      <div id="videoSchedule" className={`mt-4 ${verificationInfo.verificationMethod !== 'video' ? 'hidden' : ''}`}>
        <label className="block mb-2" data-i18n="video_date">Preferred date for video identification</label>
        <input
          type="date"
          name="video_date"
          className="w-full border px-3 py-2 rounded"
          value={verificationInfo.videoDate}
          onChange={(e) => dispatch(setVerificationInfoField({ field: 'videoDate', value: e.target.value }))} />
      </div>
    </section >
  )
}
