package com.example.Backend.models;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table (name="roles")
public class Role implements UserDetails {
    @Id
    private Long roleId;
    private String roleName;
    @OneToMany(cascade = CascadeType.ALL,fetch=FetchType.LAZY,mappedBy = "role")
    private Set<UserRole> userRoled=new HashSet<>();
    public Role() {
    }

    public Role(Long roleId, String roleName) {
        this.roleId = roleId;
        this.roleName = roleName;
    }

    public Set<UserRole> getUserRoled() {
        return userRoled;
    }

    public void setUserRoled(Set<UserRole> userRoled) {
        this.userRoled = userRoled;
    }

    public void setRoleId(Long roleId) {
        this.roleId = roleId;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public Long getRoleId() {
        return roleId;
    }

    public String getRoleName() {
        return roleName;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        Set<Authority> set=new HashSet<>();

        return null;
    }

    @Override
    public String getPassword() {
        return null;
    }

    @Override
    public String getUsername() {
        return null;
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }
}
