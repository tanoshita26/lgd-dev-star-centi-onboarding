import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store';
import { setSanctionsInfoField } from '../../store/slices/formSlice';

export const Step10Sanctions: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const sanctionsInfo = useSelector((state: RootState) => state.form.sanctionsInfo);
  return (
    <section className="step" data-step="10">
      <h2 className="text-xl font-semibold mb-4" data-i18n="step10_title">10. PEP & Sanctions Screening</h2>

      <label className="block mb-2 font-medium" data-i18n="pep_q">
        {t('pep_q')}
      </label>
      <ul className="mb-2 ml-6 list-disc text-sm text-gray-700">
        <li data-i18n="pep_client">The client/owner</li>
        <li data-i18n="pep_control">Any controlling person</li>
        <li data-i18n="pep_beneficial">Any beneficial owner</li>
        <li data-i18n="pep_establishing">Any person establishing the business relationship</li>
      </ul>
      <div className="mb-4">
        <label className="mr-4">
          <input
            checked={sanctionsInfo.isPep}
            type="radio"
            name="is_pep"
            value="yes"
            onChange={(e) => dispatch(setSanctionsInfoField({ field: 'isPep', value: e.target.value === 'yes' }))}
            required />
          {" Yes"}
        </label>
        <label>
          <input
            type="radio"
            name="is_pep"
            value="no"
            checked={!sanctionsInfo.isPep}
            onChange={(e) => dispatch(setSanctionsInfoField({ field: 'isPep', value: e.target.value === 'yes' }))} />
          {" No"}
        </label>
      </div>

      <div id="pepDetails" className={`space-y-2 mb-6 ${!sanctionsInfo.isPep ? 'hidden' : ''}`}>
        <input
          type="text"
          name="pep_name"
          placeholder="Name"
          className="w-full border px-3 py-2 rounded"
          value={sanctionsInfo.pepName}
          onChange={(e) => dispatch(setSanctionsInfoField({ field: 'pepName', value: e.target.value }))} />
        <input
          type="text"
          name="pep_position"
          placeholder="Position held"
          className="w-full border px-3 py-2 rounded"
          value={sanctionsInfo.pepPosition}
          onChange={(e) => dispatch(setSanctionsInfoField({ field: 'pepPosition', value: e.target.value }))} />
        <input
          type="text"
          name="pep_country"
          placeholder="Country"
          className="w-full border px-3 py-2 rounded"
          value={sanctionsInfo.pepCountry}
          onChange={(e) => dispatch(setSanctionsInfoField({ field: 'pepCountry', value: e.target.value }))} />
        <input
          type="text"
          name="pep_period"
          placeholder="Period in office"
          className="w-full border px-3 py-2 rounded"
          value={sanctionsInfo.pepPeriod}
          onChange={(e) => dispatch(setSanctionsInfoField({ field: 'pepPeriod', value: e.target.value }))} />
      </div>

      <label className="block mb-2 font-medium" data-i18n="sanctions_q">
        {t('sanctions_q')}
      </label>
      <ul className="mb-2 ml-6 list-disc text-sm text-gray-700">
        <li data-i18n="sanctions_client">The client/owner</li>
        <li data-i18n="sanctions_control">Any controlling person</li>
        <li data-i18n="sanctions_beneficial">Any beneficial owner</li>
        <li data-i18n="sanctions_establishing">Any person establishing the business relationship</li>
      </ul>
      <div className="mb-4">
        <label className="mr-4">
          <input type="radio" name="is_sanctioned" value="yes"
            checked={sanctionsInfo.isSanctions}
            onChange={(e) => dispatch(setSanctionsInfoField({ field: 'isSanctions', value: e.target.value === 'yes' }))} />
          {" Yes"}
        </label>
        <label>
          <input type="radio" name="is_sanctioned" value="no"
            checked={!sanctionsInfo.isSanctions}
            onChange={(e) => dispatch(setSanctionsInfoField({ field: 'isSanctions', value: e.target.value === 'yes' }))} />
          {" No"}
        </label>
      </div>

      <div id="sanctionDetails" className={`space-y-2 ${!sanctionsInfo.isSanctions ? 'hidden' : ''}`}>
        <input
          type="text"
          name="sanction_name"
          placeholder="Name"
          className="w-full border px-3 py-2 rounded"
          value={sanctionsInfo.sanctionsName}
          onChange={(e) => dispatch(setSanctionsInfoField({ field: 'sanctionsName', value: e.target.value }))} />
        <input
          type="text"
          name="sanction_country"
          placeholder="Country"
          className="w-full border px-3 py-2 rounded"
          value={sanctionsInfo.sanctionsCountry}
          onChange={(e) => dispatch(setSanctionsInfoField({ field: 'sanctionsCountry', value: e.target.value }))} />
        <input
          type="text"
          name="sanction_ties"
          placeholder="Nature of ties"
          className="w-full border px-3 py-2 rounded"
          value={sanctionsInfo.sanctionsNature}
          onChange={(e) => dispatch(setSanctionsInfoField({ field: 'sanctionsNature', value: e.target.value }))} />
      </div>
    </section>
  )
}