import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store';
import { setBeneficialInfoField, addBeneficialOwner, updateBeneficialOwner, deleteBeneficialOwner } from '../../store/slices/formSlice';

export const Step6Benifical: React.FC = () => {
  const { t } = useTranslation();
  const { beneficialInfo } = useSelector((state: RootState) => state.form);
  const dispatch = useDispatch();
  return (
    <section className="step" data-step="6">
      <h2 className="text-xl font-semibold mb-4" data-i18n="step6_title">6. Beneficial Ownership</h2>

      <label className="block mb-2 font-medium" data-i18n="sole_owner_q">
        {t('sole_owner_q')}
      </label>
      <div className="mb-4">
        <label className="mr-4">
          <input
            type="radio"
            name="is_sole_owner"
            value="yes"
            required
            checked={beneficialInfo.isSoleOwner}
            onChange={() => dispatch(setBeneficialInfoField({ field: 'isSoleOwner', value: true }))}
          />
          {" " + t('yes')}
        </label>
        <label>
          <input
            type="radio"
            name="is_sole_owner"
            value="no"
            required
            checked={!beneficialInfo.isSoleOwner}
            onChange={() => dispatch(setBeneficialInfoField({ field: 'isSoleOwner', value: false }))}
          />
          {" " + t('no')}
        </label>
      </div>

      <div id="beneficialOwnersBlock" className={!beneficialInfo.isSoleOwner ? "hidden space-y-6" : "space-y-6"}>
        <div id="beneficialOwners" className="space-y-4"></div>
        <button
          type="button"
          id="addBeneficialOwner"
          className="text-sm text-blue-600 hover:underline font-medium"
          onClick={() => dispatch(addBeneficialOwner())}
        >
          + <span data-i18n="add_beneficial">{t('add_beneficial')}</span>
        </button>
      </div>

      {beneficialInfo.isSoleOwner && beneficialInfo.beneficialOwners.map(owner => (
        <div key={owner.id} className="p-4 border rounded bg-gray-50 relative">
          <button
            type="button"
            className="absolute top-2 right-2 text-red-500 hover:text-red-700 text-lg"
            aria-label="Remove"
            onClick={() => dispatch(deleteBeneficialOwner(owner.id))}
          >
            ×
          </button>
          <input
            type="text"
            name="name"
            className="w-full border px-3 py-2 rounded mb-2"
            placeholder="Name"
            value={owner.firstName}
            onChange={(e) => dispatch(updateBeneficialOwner({ index: owner.id, owner: { firstName: e.target.value } }))}
          />
          <input
            type="text"
            name="name"
            className="w-full border px-3 py-2 rounded mb-2"
            placeholder="Name"
            value={owner.lastName}
            onChange={(e) => dispatch(updateBeneficialOwner({ index: owner.id, owner: { lastName: e.target.value } }))}
          />
          <input
            type="text"
            name="dob"
            className="w-full border px-3 py-2 rounded mb-2"
            placeholder="Date of Birth"
            value={owner.dob}
            onChange={(e) => dispatch(updateBeneficialOwner({ index: owner.id, owner: { dob: e.target.value } }))}
          />
          <input
            type="text"
            name="nationality"
            className="w-full border px-3 py-2 rounded mb-2"
            placeholder="Nationality"
            value={owner.nationality}
            onChange={(e) => dispatch(updateBeneficialOwner({ index: owner.id, owner: { nationality: e.target.value } }))}
          />
          <input
            type="text"
            name="address"
            className="w-full border px-3 py-2 rounded mb-2"
            placeholder="Address"
            value={owner.address}
            onChange={(e) => dispatch(updateBeneficialOwner({ index: owner.id, owner: { address: e.target.value } }))}
          />
          <input
            type="text"
            name="relationship"
            className="w-full border px-3 py-2 rounded mb-2"
            placeholder="Relationship"
            value={owner.relationship}
            onChange={(e) => dispatch(updateBeneficialOwner({ index: owner.id, owner: { relationship: e.target.value } }))}
          />
        </div>
      ))}
    </section >
  )
};
